Score: $1000$ points

## Problem Statement

The Kingdom of AtCoder has $2N$ intersections labeled with numbers from $1$ to $2N$. Additionally, there are three types of **one-way** roads in the kingdom:

- **Type A:** For each $2 \leq i \leq N$, there is a road from intersection $2i-3$ to intersection $2i-1$.
- **Type B:** For each $2 \leq i \leq N$, there is a road from intersection $2i-2$ to intersection $2i$.
- **Type C:** For each $1 \leq i \leq N$, there is a road connecting intersection $2i-1$ and intersection $2i$ with direction $s_i$.

Here, $s_i$ is `X` or `Y`, where direction `X` means the road goes from intersection $2i-1$ to intersection $2i$, and direction `Y` means it goes from intersection $2i$ to intersection $2i-1$.

Takahashi wants to **walk** several times so that for each $1 \leq i \leq N$, the direction of Type-C road connecting intersections $2i-1$ and $2i$ will be $t_i$.

**What is a walk?**

Start at any intersection and repeat the following action zero or more times:

- If it is possible to proceed to a Type-C road from the current intersection, walk along the Type-C road to the next intersection.
- Otherwise, if it is possible to proceed to a Type-A or B road from the current intersection, walk along that road to the next intersection.

Then, reverse the directions of all Type-C roads that were passed.

Calculate the minimum number of walks needed to achieve the goal and provide one method to achieve the goal in the minimum number of walks. Under the constraints of this problem, it can be proved that the goal can be achieved in a finite number of walks.

## Constraints

- $N$ is an integer such that $1 \leq N \leq 4000$.
- Each of $s_1, s_2, \dots, s_N$ is `X` or `Y`.
- Each of $t_1, t_2, \dots, t_N$ is `X` or `Y`.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $s_1 s_2 \cdots s_N$
> 
> $t_1 t_2 \cdots t_N$

## Output

Print your solution in the following format, where $X$ is the number of walks, and the $i$-th walk $(1 \leq i \leq X)$ starts at intersection $a_i$ and finishes at intersection $b_i$.

> $X$
> 
> $a_1$ $b_1$
> 
> $a_2$ $b_2$
> 
> $\vdots$
> 
> $a_X$ $b_X$

```input1
5
XYXYX
XXYXX
```

```output1
1
2 7
```

In this sample input, Takahashi will walk as follows:

- Start at intersection $2$.
- Since there is no Type-C road to proceed from intersection $2$, walk along the Type-B road to intersection $4$.
- Since there is a Type-C road to proceed from intersection $4$, walk along the Type-C road to intersection $3$.
- Since there is no Type-C road to proceed from intersection $3$, walk along the Type-A road to intersection $5$.
- Since there is a Type-C road to proceed from intersection $5$, walk along the Type-C road to intersection $6$.
- Since there is no Type-C road to proceed from intersection $6$, walk along the Type-B road to intersection $8$.
- Since there is a Type-C road to proceed from intersection $8$, walk along the Type-C road to intersection $7$.
- Finish at intersection $7$.

This walk passes through the following three Type-C roads:

- The road connecting intersection $3$ and intersection $4$.
- The road connecting intersection $5$ and intersection $6$.
- The road connecting intersection $7$ and intersection $8$.

The directions of these roads are reversed, so the directions of the roads connecting intersections $2i-1$ and $2i$ for $i = 1, 2, 3, 4, 5$ are now `X`, `X`, `Y`, `X`, `X`, respectively, achieving the goal.

```input2
5
XXYYX
XXYYX
```

```output2
0
```

Note that the goal is already achieved at the beginning, so there is no need to walk even once.

```input3
5
XXXXX
YYYYY
```

```output3
5
1 2
3 4
5 6
7 8
9 10
```

```input4
20
XXXYXYYXXXYXXXXYYXXY
XXYXYYXXYXXYXYXYXYXY
```

```output4
5
14 18
29 38
14 26
5 10
27 35
```

```input5
20
YXYXYXYYYXYYXYYXYXXX
XXXXXYXYYYXYYXXYYYXY
```

```output5
5
29 36
10 38
2 3
4 7
28 40
```