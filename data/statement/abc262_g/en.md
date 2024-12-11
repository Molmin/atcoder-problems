Score : $600$ points

## Problem Statement

There is an empty sequence $X$ and an empty stack $S$.  Also, you are given an integer sequence $A=(a_1,\ldots,a_N)$ of length $N$.<br>
For each $i=1,\ldots,N$ in this order, Takahashi will do one of the following operations:

- Move the integer $a_i$ onto the top of $S$.
- Discard the integer $a_i$ from $A$.

Additionally, Takahashi may do the following operation whenever $S$ is not empty:

- Move the integer at the top of $S$ to the tail of $X$.

The score of the final $X$ is defined as follows.

- If $X$ is non-decreasing, i.e. if $x_i \leq x_{i+1}$ holds for all integer $i(1 \leq i \lt |X|)$, where $X=(x_1,\ldots,x_{|X|})$, then the score is $|X|$ (where $|X|$ denotes the number of terms in $X$).
- If $X$ is not non-decreasing, then the score is $0$.

Find the maximum possible score.

## Constraints

- $1 \leq N \leq 50$
- $1 \leq a_i \leq 50$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $a_1$ $\ldots$ $a_N$

## Output

Print the answer.

```input1
7
1 2 3 4 1 2 3
```

```output1
5
```

The following operations make the final $X$ equal $(1,1,2,3,4)$, for a score of $5$.

- Move $a_1=1$ onto the top of $S$.
- Move $1$ at the top of $S$ to the tail of $X$.
- Move $a_2=2$ onto the top of $S$.
- Discard $a_3=3$.
- Move $a_4=4$ onto the top of $S$.
- Move $a_5=1$ onto the top of $S$.
- Move $1$ at the top of $S$ to the tail of $X$.
- Move $a_6=2$ onto the top of $S$.
- Move $2$ at the top of $S$ to the tail of $X$.
- Move $a_7=3$ onto the top of $S$.
- Move $3$ at the top of $S$ to the tail of $X$.
- Move $4$ at the top of $S$ to the tail of $X$.

We cannot make the score $6$ or greater, so the maximum possible score is $5$.

```input2
10
1 1 1 1 1 1 1 1 1 1
```

```output2
10
```