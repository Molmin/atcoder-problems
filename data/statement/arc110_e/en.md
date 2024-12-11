Score : $800$ points

## Problem Statement

We have a string $S$ of length $N$ consisting of `A`, `B`, and `C`.

You can do the following operation on $S$ zero or more times:

- Choose $i$ $(1 \leq i \leq |S| - 1)$ such that $S_i \neq S_{i + 1}$. Replace $S_i$ with the character (among `A`, `B`, and `C`) that is different from both $S_i$ and $S_{i + 1}$, and remove $S_{i + 1}$ from $S$.

Find the number of distinct strings that $S$ can be after zero or more operations, and print the count modulo $(10^9+7)$.

## Constraints

- $1 \leq N \leq 10^6$
- $S$ is a string of length $N$ consisting of `A`, `B`, and `C`.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $S$

## Output

Print the number of distinct strings that $S$ can be after zero or more operations, modulo $(10^9+7)$.

```input1
5
ABAAC
```

```output1
11
```

For example, the following sequence of operations turns $S$ into `ACB`:

- First, choose $i=2$. We replace $S_2$ with `C` and remove $S_3$, turning $S$ into `ACAC`.
- Then, choose $i=3$. We replace $S_3$ with `B` and remove $S_4$, turning $S$ into `ACB`.

```input2
50
AACCCCBBBACCCCABABCCCCABACCACACACCACABABBBABABACCB
```

```output2
256972022
```