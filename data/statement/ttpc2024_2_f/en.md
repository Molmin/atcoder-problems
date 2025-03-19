Score: $100$ points

## Problem Statement

You are given a string $S, T$ of length $N$ consisting of only uppercase English letters. You can perform the following operation $0$ or more times:

- If there exists a substring of $S$ such that `TIOT`, choose one and replace it with `ISCT`.
  (More precisely, if there exists $1 \le i \le N-3$ such that $S_{i}={}$`T`, $S_{i+1}={}$`I`, $S_{i+2}={}$`O`, $S_{i+3}={}$`T`, choose one and replace it with $S_{i}={}$`I`, $S_{i+1}={}$`S`, $S_{i+2}={}$`C`, $S_{i+3}={}$`T`.)

Can you make $S$ equal to $T$ by performing the operation?

You have $Q$ test cases to answer.

## Constraints

- $1 \leq Q \leq 5 \times 10^4$
- $4 \le N \le 2 \times 10^5$
- $S$ and $T$ are strings of length $N$ consisting of uppercase English letters.
- The sum of $N$ across the test cases is at most $2 \times 10^5$.

## Input

The input is given in the following format:

> $Q$
> 
> ${case}_1$
> 
> ${case}_2$
> 
> $\vdots$
> 
> ${case}_Q$

Each test cases is given in the following format:

> $N$
> 
> $S$
> 
> $T$

## Output

Print $Q$ lines. On the $i$-th line, print the answer to the $i$-th test case as either `Yes` or `No`.

```input1
3
10
ETIOTROPIC
EISCTROPIC
6
BTIEOT
BISECT
10
TIOTIOTIOT
TIOISCISCT
```

```output1
Yes
No
Yes
```

For the first test case, you can match `ETIOTROPIC` to `EISCTROPIC` by performing the operation once as follows:

- The substring from the $2$ nd to $5$ th characters in `ETIOTROPIC` is `TIOT`, so replace it with `ISCT`.

For the second test case, you cannot match two strings through the operation.