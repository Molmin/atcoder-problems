Score : $600$ points

## Problem Statement

We have a connected undirected graph with $N$ vertices and $M$ edges, which is not necessarily simple.<br>
Edge $i$ connects Vertex $A_i$ and Vertex $B_i$, and has a character $C_i$ written on it.<br>
Let us make a string by choosing a path from Vertex $1$ to Vertex $N$ (possibly with repetitions of the same edge and vertex) and arrange the characters written on the edges in that path.<br>
Determine whether this string can be a palindrome. If it can, find the minimum possible length of such a palindrome.

## Constraints

- $2 \le N \le 1000$
- $1 \le M \le 1000$
- $1 \le A_i \le N$
- $1 \le B_i \le N$
- $C_i$ is a lowercase English letter.
- The given graph is connected.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $B_1$ $C_1$
> 
> $A_2$ $B_2$ $C_2$
> 
> $A_3$ $B_3$ $C_3$
> 
> $\hspace{25pt} \vdots$
> 
> $A_M$ $B_M$ $C_M$

## Output

If a palindrome can be made, print the minimum possible length of such a palindrome; otherwise, print `-1`.

```input1
8 8
1 2 a
2 3 b
1 3 c
3 4 b
4 5 a
5 6 c
6 7 b
7 8 a
```

```output1
10
```

By traversing the edges in the order $1, 2, 3, 1, 2, 4, 5, 6, 7, 8$, we can make a string `abcabbacba`, which is a palindrome.<br>
It is impossible to make a shorter palindrome, so the answer is $10$.

```input2
4 5
1 1 a
1 2 a
2 3 a
3 4 b
4 4 a
```

```output2
5
```

By traversing the edges in the order $2, 3, 4, 5, 5$, we can make a string `aabaa`, which is a palindrome.<br>
Note that repetitions of the same edge and vertex are allowed.

```input3
3 4
1 1 a
1 2 a
2 3 b
3 3 b
```

```output3
-1
```

We cannot make a palindrome.