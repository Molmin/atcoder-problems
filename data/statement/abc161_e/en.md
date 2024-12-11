Score : $500$ points

## Problem Statement

Takahashi has decided to work on $K$ days of his choice from the $N$ days starting with tomorrow.

You are given an integer $C$ and a string $S$. Takahashi will choose his workdays as follows:

- After working for a day, he will refrain from working on the subsequent $C$ days.
- If the $i$-th character of $S$ is `x`, he will not work on Day $i$, where Day $1$ is tomorrow, Day $2$ is the day after tomorrow, and so on.

Find all days on which Takahashi is bound to work.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq K \leq N$
- $0 \leq C \leq N$
- The length of $S$ is $N$.
- Each character of $S$ is `o` or `x`.
- Takahashi can choose his workdays so that the conditions in Problem Statement are satisfied.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$ $C$
> 
> $S$

## Output

Print all days on which Takahashi is bound to work in ascending order, one per line.

```input1
11 3 2
ooxxxoxxxoo
```

```output1
6
```

Takahashi is going to work on $3$ days out of the $11$ days. After working for a day, he will refrain from working on the subsequent $2$ days.

There are four possible choices for his workdays: Day $1,6,10$, Day $1,6,11$, Day $2,6,10$, and Day $2,6,11$.

Thus, he is bound to work on Day $6$.

```input2
5 2 3
ooxoo
```

```output2
1
5
```

There is only one possible choice for his workdays: Day $1,5$.

```input3
5 1 0
ooooo
```

```output3

```

There may be no days on which he is bound to work.

```input4
16 4 3
ooxxoxoxxxoxoxxo
```

```output4
11
16
```