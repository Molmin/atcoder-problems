Score : $500$ points

## Problem Statement

In the Kingdom of Takahashi, $N$ citizens numbered $1$ to $N$ took an examination of competitive programming.<br>
There were two tests, and Citizen $i$ ranked $P_i$-th in the first test and $Q_i$-th in the second test.<br>
There were no ties in either test. That is, each of the sequences $P$ and $Q$ is a permutation of $(1, 2, ..., N)$.

Iroha, the president of the kingdom, is going to select $K$ citizens for the national team at the coming world championship of competitive programming.<br>
The members of the national team must be selected so that the following is satisfied.

- There should not be a pair of citizens $(x, y)$ where Citizen $x$ is selected and Citizen $y$ is not selected such that $P_x &gt; P_y$ and $Q_x &gt; Q_y$.-   - In other words, if Citizen $y$ got a rank smaller than that of Citizen $x$ in both tests, it is not allowed to select Citizen $x$ while not selecting Citizen $y$.

To begin with, Iroha wants to know the number of ways to select citizens for the national team that satisfy the condition above. Find it to help her.<br>
Since this number can be enormous, print it modulo $998244353$.

## Constraints

- All values in input are integers.
- $1 \le N \le 300$
- $1 \le K \le N$
- Each of $P$ and $Q$ is a permutation of $(1,2,...,N)$.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $P_1$ $P_2$ $\dots$ $P_N$
> 
> $Q_1$ $Q_2$ $\dots$ $Q_N$

## Output

Print the answer as an integer.

```input1
4 2
2 4 3 1
2 1 4 3
```

```output1
3
```

- It is fine to select Citizen $1$ and Citizen $2$ for the team.
- If Citizen $1$ and Citizen $3$ are selected, Citizen $4$ ranked higher than Citizen $3$ did in both tests, so the pair $(x,y)=(3,4)$ would violate the condition in the Problem Statement.
- It is fine to select Citizen $1$ and Citizen $4$.
- If Citizen $2$ and Citizen $3$ are selected, the pair $(x,y)=(3,1)$ would violate the condition.
- It is fine to select Citizen $2$ and Citizen $4$.
- If Citizen $3$ and Citizen $4$ are selected, the pair $(x,y)=(3,1)$ would violate the condition.

The final answer is $3$.

```input2
33 16
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33
33 32 31 30 29 28 27 26 25 24 23 22 21 20 19 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1
```

```output2
168558757
```

All $\binom{33}{16} = 1166803110$ ways of selecting $16$ from the $33$ citizens satisfy the requirement.<br>
Therefore, we should print $1166803110$ modulo $998244353$, that is, $168558757$.

```input3
15 7
4 9 7 5 6 13 2 11 3 1 12 14 15 10 8
4 14 9 12 7 15 1 2 8 11 3 5 13 6 10
```

```output3
23
```