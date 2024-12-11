Score : $1200$ points

## Problem Statement

In Takahashi's mind, there is always an integer sequence of length $2 \times 10^9 + 1$: $A = (A_{-10^9}, A_{-10^9 + 1}, ..., A_{10^9 - 1}, A_{10^9})$ and an integer $P$.

Initially, all the elements in the sequence $A$ in Takahashi's mind are $0$, and the value of the integer $P$ is $0$.

When Takahashi eats symbols `+`, `-`, `&amp;gt;` and `&amp;lt;`, the sequence $A$ and the integer $P$ will change as follows:

- When he eats `+`, the value of $A_P$ increases by $1$;
- When he eats `-`, the value of $A_P$ decreases by $1$;
- When he eats `&amp;gt;`, the value of $P$ increases by $1$;
- When he eats `&amp;lt;`, the value of $P$ decreases by $1$.

Takahashi has a string $S$ of length $N$. Each character in $S$ is one of the symbols `+`, `-`, `&amp;gt;` and `&amp;lt;`.
He chose a pair of integers $(i, j)$ such that $1 \leq i \leq j \leq N$ and ate the symbols that are the $i$-th, $(i+1)$-th, $...$, $j$-th characters in $S$, in this order.
We heard that, after he finished eating, the sequence $A$ became the same as if he had eaten all the symbols in $S$ from first to last.
How many such possible pairs $(i, j)$ are there?

## Constraints

- $1 \leq N \leq 250000$
- $|S| = N$
- Each character in $S$ is `+`, `-`, `&amp;gt;` or `&amp;lt;`.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $S$

## Output

Print the answer.

```input1
5
+>+<-
```

```output1
3
```

If Takahashi eats all the symbols in $S$, $A_1 = 1$ and all other elements would be $0$.
The pairs $(i, j)$ that leads to the same sequence $A$ are as follows:

- $(1, 5)$
- $(2, 3)$
- $(2, 4)$

```input2
5
+>+-<
```

```output2
5
```

Note that the value of $P$ may be different from the value when Takahashi eats all the symbols in $S$.

```input3
48
-+><<><><><>>>+-<<>->>><<><<-+<>><+<<>+><-+->><<
```

```output3
475
```