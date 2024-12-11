Score : $400$ points

## Problem Statement

Snuke is visiting a shop in Tokyo called 109 to buy some logs.
He wants $n$ logs: one of length $1$, one of length $2$, $...$, and one of length $n$.
The shop has $n+1$ logs in stock: one of length $1$, one of length $2$, $\dots$, and one of length $n+1$. Each of these logs is sold for $1$ yen (the currency of Japan).

He can cut these logs as many times as he wants after buying them. That is, he can get $k$ logs of length $L_1, \dots, L_k$ from a log of length $L$, where $L = L_1 + \dots + L_k$. He can also throw away unwanted logs.

Snuke wants to spend as little money as possible to get the logs he wants.
Find the minimum amount of money needed to get $n$ logs of length $1$ to $n$.

## Constraints

- $1 \leq n \leq 10^{18}$

## Input

Input is given from Standard Input in the following format:

> $n$

## Output

Print the minimum amount of money needed to get $n$ logs of length $1$ to $n$.

```input1
4
```

```output1
3
```

One way to get the logs he wants with $3$ yen is:

- Buy logs of length $2$, $4$, and $5$.
- Cut the log of length $5$ into two logs of length $1$ each and a log of length $3$.
- Throw away one of the logs of length $1$.

```input2
109109109109109109
```

```output2
109109108641970782
```