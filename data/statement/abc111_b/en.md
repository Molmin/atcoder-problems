Score : $200$ points

## Problem Statement

Kurohashi has never participated in AtCoder Beginner Contest (ABC).

The next ABC to be held is ABC $N$ (the $N$-th ABC ever held).
Kurohashi wants to make his debut in some ABC $x$ such that all the digits of $x$ in base ten are the same.

What is the earliest ABC where Kurohashi can make his debut?

## Constraints

- $100 \leq N \leq 999$
- $N$ is an integer.

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

If the earliest ABC where Kurohashi can make his debut is ABC $n$, print $n$.

```input1
111
```

```output1
111
```

The next ABC to be held is ABC $111$, where Kurohashi can make his debut.

```input2
112
```

```output2
222
```

The next ABC to be held is ABC $112$, which means Kurohashi can no longer participate in ABC $111$.
Among the ABCs where Kurohashi can make his debut, the earliest one is ABC $222$.

```input3
750
```

```output3
777
```