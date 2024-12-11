Score : $800$ points

## Problem Statement

$NK$ people are standing in a line from left to right. Let us denote them as person $i$ $(0\leq i \leq NK-1)$ from left to right.

Each person is always facing either left or right. The direction of each person at time $t=0$ is represented by a string of length $N$, $S=S_0 S_1 \dots S_{N-1}$, consisting of `L` and `R`. At time $t=0$, person $i$ is facing left if $S_{i \bmod N}$ is `L`, and right if it is `R`.

At time $t=0.5,\ 1.5,\ 2.5 ,\ \dots$, these people **simultaneously** change their directions according to the following rules.

- When a person is facing left:<br>
If there are one or more people in the direction the person is facing, and more than half of those people are facing right, the person changes direction and faces right. Otherwise, the person does not change direction.
- When a person is facing right:<br>
If there are one or more people in the direction the person is facing, and more than half of those people are facing left, the person changes direction and faces left. Otherwise, the person does not change direction.

Find the sum, modulo $998244353$, of the numbers of times the $NK$ people change direction from time $t=0$ to $t=10^{100}$.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq K \leq 2 \times 10^5$
- $S$ is a string of length $N$ consisting of `L` and `R`.
- All numerical values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $K$
> 
> $S$

## Output

Print the answer.

```input1
7 1
RRLRLLL
```

```output1
9
```

If we represent the directions of the seven people at each time, we have `LLRLRRL` at $t=1$, `LLRLRLL` at $t=2$, and `LLLLLLL` at $t=3$.

After $t=3$, the directions of the seven people do not change. Therefore, the answer is $1+1+2+1+2+2+0=9$.

```input2
4 10
LLRR
```

```output2
0
```

```input3
23 200
RLRRRLLLLLLLLRRRLLRLRRR
```

```output3
2207
```