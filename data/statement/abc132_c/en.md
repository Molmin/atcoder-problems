Score : $300$ points

## Problem Statement

Takahashi made $N$ problems for competitive programming.
The problems are numbered $1$ to $N$, and the difficulty of Problem $i$ is represented as an integer $d_i$ (the higher, the harder).

He is dividing the problems into two categories by choosing an integer $K$, as follows:

- A problem with difficulty $K$ or higher will be *for ARCs*.
- A problem with difficulty lower than $K$ will be *for ABCs*.

How many choices of the integer $K$ make the number of problems for ARCs and the number of problems for ABCs the same?

## Problem Statement

- $2 \leq N \leq 10^5$
- $N$ is an even number.
- $1 \leq d_i \leq 10^5$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $d_1$ $d_2$ $...$ $d_N$

## Output

Print the number of choices of the integer $K$ that make the number of problems for ARCs and the number of problems for ABCs the same.

```input1
6
9 1 4 4 6 7
```

```output1
2
```

If we choose $K=5$ or $6$, Problem $1$, $5$, and $6$ will be for ARCs, Problem $2$, $3$, and $4$ will be for ABCs, and the objective is achieved.
Thus, the answer is $2$.

```input2
8
9 1 14 5 5 4 4 14
```

```output2
0
```

There may be no choice of the integer $K$ that make the number of problems for ARCs and the number of problems for ABCs the same.

```input3
14
99592 10342 29105 78532 83018 11639 92015 77204 30914 21912 34519 80835 100000 1
```

```output3
42685
```