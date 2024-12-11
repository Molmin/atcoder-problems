Score : $500$ points

## Problem Statement

Have you noticed this part of AtCoder website?

![](https://img.atcoder.jp/agc050/2a140890f3297cce737744ff4d2f296d.png)

Here the numbers are carefully chosen so that we can jump from any page to any page in small number of steps, while each page doesn't contain too many links.
In this task you are asked to do a similar thing with only **two links** on each page!

Snuke made a website with $N$ pages numbered $1$ through $N$.
For each $i$ ($1 \leq i \leq N$), choose two integers $a_i$ and $b_i$ ($1 \leq a_i, b_i \leq N$), and add two links on Page $i$: a link to Page $a_i$ and a link to Page $b_i$.
The website must satisfy the following constraint:

- You must be able to jump from any page to any other page by clicking at most $10$ links.

Under the constraints of the problem, we can prove that this is always possible.

## Constraints

- $1 \leq N \leq 1000$

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

Print the answer in the following format:

> $a_1 \ b_1$
> 
> $:$
> 
> $a_N \ b_N$

In case there are multiple possible answers, print any.

```input1
1
```

```output1
1 1
```

Snuke made an excellent website with only one page.
It even contains two links to itself!

```input2
3
```

```output2
2 3
1 3
1 2
```

Here we can jump from any page to any other page by a direct link.