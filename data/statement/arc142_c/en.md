Score : $500$ points

## Problem Statement

There is a tree with $N$ vertices, numbered $1, \ldots, N$.<br>
For each pair of integers $u,v\, (1 \leq u,v \leq N)$, the distance $d_{u,v}$ between Vertices $u, v$ is defined as the following.

- The number of edges contained in the shortest path connecting Vertices $u$ and $v$.

You are allowed to ask between $0$ and $2N$ questions (inclusive) in the following form.

- Ask the distance $d_{u,v}$ between Vertices $u,v$ for integers $u,v$ of your choice such that $1\leq u,v \leq N$ and $u+v &gt; 3$.

Find the distance $d_{1,2}$ between Vertices $1,2$.

## Constraints

- $3 \leq N \leq 100$
- $N$ is an integer.
- The tree is determined before the start of the interaction between your program and the judge.

## Input and Output

**This is an interactive task**, in which your program and the judge interact via input and output.

First, your program is given a positive integer $N$ from Standard Input:

```plain
$N$
```

Then, you get to ask questions.<br>
A question should be printed in the following format (with a newline at the end):

```plain
? $u$ $v$
```

If the question is valid, the response $d_{u,v}$ is given from Standard Input:

```plain
$d_{u,v}$
```

If the question is judged invalid because, for example, it is malformed or you have asked too many questions, you get `-1` instead of the response:

```plain
-1
```

At this point, your submission is already judged incorrect. The judge's program then terminates; yours should too, desirably.

When you find the answer $d_{1,2}$, print it to Standard Output in the following format (with a newline at the end):

```plain
! $d_{1,2}$
```

## Notices

- <span style="color:red">**Flush Standard Output after each output. Otherwise, you might get the TLE verdict.**</span>
- After printing the answer (or receiving `-1`), immediately terminate the program normally. Otherwise, the verdict would be indeterminate.
- The verdict for the case of a malformed output would be indeterminate.
- Specifically, note that too many newlines would also be seen as a malformed output.

## Sample Input and Output

The following is a sample interaction for the tree shown in this image.

![](https://img.atcoder.jp/arc142/1435f0bc323a9e21cf3abf1c4911e826.png)

Input
Output
Description

`3`

Interaction starts with the integer $N$.

`?` `1` `3`
As the $1$-st question, you ask the distance between Vertices $1$ and $3$.

`1`

The distance between Vertices $1,3$ is returned.

`?` `2` `2`
As the $2$-nd question, you ask the distance between Vertices $2$ and $2$.

`0`

The distance between Vertices $2,2$ is returned.

`?` `2` `3`
As the $3$-rd question, you ask the distance between Vertices $2$ and $3$.

`1`

The distance between Vertices $2,3$ is returned.

`?` `3` `1`
As the $4$-th question, you ask the distance between Vertices $3$ and $1$.

`1`

The distance between Vertices $3,1$ is returned.

`?` `3` `2`
As the $5$-th question, you ask the distance between Vertices $3$ and $2$.

`1`

The distance between Vertices $3,2$ is returned.

`?` `2` `2`
As the $6$-th question, you ask the distance between Vertices $2$ and $2$.

`0`

The distance between Vertices $2,2$ is returned.

`!` `2`
You guess the distance between Vertices $1,2$ and terminate. The actual distance between them is $2$, so you would get the AC verdict.