Score : $200$ points

## Problem Statement

You are given three strings $A, B$ and $C$. Each of these is a string of length $N$ consisting of lowercase English letters.

Our objective is to make all these three strings equal. For that, you can repeatedly perform the following operation:

- Operation: Choose one of the strings $A, B$ and $C$, and specify an integer $i$ between $1$ and $N$ (inclusive). Change the $i$-th character from the beginning of the chosen string to some other lowercase English letter.

What is the minimum number of operations required to achieve the objective?

## Constraints

- $1 \leq N \leq 100$
- Each of the strings $A, B$ and $C$ is a string of length $N$.
- Each character in each of the strings $A, B$ and $C$ is a lowercase English letter.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A$
> 
> $B$
> 
> $C$

## Output

Print the minimum number of operations required.

```input1
4
west
east
wait
```

```output1
3
```

In this sample, initially $A =$ `west`、$B =$ `east`、$C =$ `wait`. We can achieve the objective in the minimum number of operations by performing three operations as follows:

- Change the second character in $A$ to `a`. $A$ is now `wast`.
- Change the first character in $B$ to `w`. $B$ is now `wast`.
- Change the third character in $C$ to `s`. $C$ is now `wast`.

```input2
9
different
different
different
```

```output2
0
```

If $A, B$ and $C$ are already equal in the beginning, the number of operations required is $0$.

```input3
7
zenkoku
touitsu
program
```

```output3
13
```