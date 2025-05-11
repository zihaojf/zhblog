---
title: 'C Lab实验报告'
publishDate: '2025-03-04'
updatedDate: '2025-03-04'
description: 'CSAPP C Lab实验解析'
tags:
  - CSAPP
  - WhuCS
language: '中文'
---

## 头文件queue.h

为了实现在时间复杂度O(1)内能够返回链表的大小和在尾部插入新节点，我们需要加上`q_size`和`q_tail`并实时维护。
## 源文件queue.c
### q_new
需要使用malloc开辟一个大小为`queue_t`的内存空间并将类型为`queue_t`的指针指向它，并将其`head`、`tail`设置为NULL
```c++
queue_t *q_new()
{
    /* Remember to handle the case if malloc returned NULL */
    queue_t *q = NULL;
    bool ok = (q = malloc(sizeof(queue_t)));
    if(ok)
    {
      q->head = NULL;
      q->tail = NULL;
      q->size = 0;
      return q;
    }
    else
      return NULL;
}
```
### q_free
首先判断传入`queue_t *q`是否为nul,如果存在则从头节点遍历访问，删除每个节点
```c++
oid q_free(queue_t *q)
{
    /* Remember to free the queue structue and list elements */
    if(q)
    {
      list_ele_t *t= q->head;
      while(t)
      {
        list_ele_t *temp = t;
        t = t->next;
        free(temp);
      }
      free(q);
    }
    
}
```
### q_insert_head
先新建一个节点并分配内存空间，在将新节点的`next`指向原链表的`head`节点，再将`head`节点更新为新节点，对应的`size++`。注意：如果原本q的大小为1，则新节点同时也是`tail`节点
```c++
bool q_insert_head(queue_t *q, int v)
{
    /* What should you do if the q is NULL? */
    /* What if malloc returned NULL? */
    list_ele_t *newq;
    if(q)
    {
      bool ok = (newq = malloc(sizeof(list_ele_t)));
      if(ok)
      {
        newq->value = v;
        newq->next = q->head;
        q->head = newq;
        if(!q->size)
        {
          q->tail = newq;
        }
        q->size++;
        return true;
      }
      else return false;
    }
    return false;
}
```

### q_insert_tail
与`q_insert_head`实现方法类似，唯一区别是要求在时间复杂度O(1)内实现插入，无法使用从头节点遍历的方法找到尾节点，可以直接使用维护的`tail`节点。注意：如果原本q的大小为1,则新节点同时也是`head`节点。
```c++
bool q_insert_tail(queue_t *q, int v)
{
    /* Remember: It should operate in O(1) time */
    list_ele_t *newq;
    if(q)
    {
      bool ok = (newq = malloc(sizeof(list_ele_t)));
      if(ok)
      {
        newq->value = v;
        newq->next = NULL;
        if(!q->size)
        {
          q->tail = newq;
          q->head = newq;
          q->size++;
        }
        else{
          q->tail->next = newq;
          q->tail = newq;
          q->size++;
        }
        return true;
      }
      return false;
    }
    return false;
}
```
### q_remove_head
删除头节点，并在删除后将头节点设置为原头节点的下一节点。如果`q_size`原本为1，则只有头节点，删除后应将头节点设置为null
```c++
bool q_remove_head(queue_t *q, int *vp)
{
    if(!q || !q->size)
      return false;
    else{
      if(vp)
      {
        *vp = q->head->value;
        list_ele_t *temp = q->head;
        q->head = temp->next;
        free(temp);
        --q->size;
        return true;
      }
    }
    return false;
}
```
### q_size
直接返回维护的`size`即可
```c++
int q_size(queue_t *q)
{
    /* Remember: It should operate in O(1) time */
    if(!q || !q->size)
      return 0;
    else return q->size;
}
```
### q_reverse
翻转我们可以遍历两次实现，第一次将节点的值记录下来，第二次将节点的值反向更新，在不反转节点next节点的情况下即可实现反转操作
```c++
void q_reverse(queue_t *q)
{
  if(q && q->size)
  {
      int value[q->size];
      list_ele_t *t = q->head;
      for(int i = q->size-1;i>=0 &&t!=NULL;i--)
      {
        value[i] = t->value;
        t = t->next;
      }
      t = q->head;
      for(int i = 0;i<q->size && t!=NULL;i++)
      {
        t->value = value[i];
        t = t->next;
      }
  }
}
```

010011 010011   q = 1/64
a = 1/4 +1/32 + 1/64 = 19/64
19/63