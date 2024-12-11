Score : $600$ points

## Problem Statement

We have a rectangular room that is $H$ meters long and $W$ meters wide.<br>
We will fill this entire room with tatami (rectangular mats) that are $2$ meters long and $1$ meter wide, and hanjo (square mats) that are $1$ meter long and $1$ meter wide. Each tatami can be placed vertically or horizontally.<br>
How many ways are there to fill the room?<br>
We distinguish ways that match only after rotation or reflection.  

Since the count can be enormous, find it modulo $998244353$.

## Constraints

- $1 \leq H \leq 6$
- $1 \leq W \leq 10^{12}$

## Input

Input is given from Standard Input in the following format:

> $H$ $W$

## Output

Print the answer.

```input1
2 2
```

```output1
7
```

We have the following seven ways:

![](https://img.atcoder.jp/ghi/67d23276d886185110ef4d487123a911.png)

```input2
3 3
```

```output2
131
```

```input3
5 100
```

```output3
379944232
```

Be sure to find the count modulo $998244353$.