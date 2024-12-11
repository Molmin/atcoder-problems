Score : $500$ points

## Problem Statement

For a non-empty string $T$ consisting of `A`, `B`, and `C`, we call it a good string if it can be turned into an empty string by performing the following two types of operations any number of times in any order.

- Operation $1$: Choose two identical characters in the string and delete them (cannot be performed if there are not two or more identical characters).
- Operation $2$: Choose one `A`, one `B`, and one `C` in the string and delete them (cannot be performed if there are not one or more of each of `A`, `B`, and `C`).

For example, `ABACA` is a good string because it can be turned into an empty string by performing the operations as follows:

- Choose the 2nd, 4th, and 5th characters and delete them (Operation $2$). The string becomes `AA`.
- Choose the 1st and 2nd characters and delete them (Operation $1$). The string becomes an empty string.

You are given a string $S$ of length $N$ consisting of `A`, `B`, `C`, and `?`. How many ways are there to replace each `?` with `A`, `B`, or `C` to form a string that contains **at least** $K$ good strings as contiguous substrings? Substrings are counted separately if they are at different positions in the original string, even if they are identical strings.

Find the count modulo $998244353$.

## Constraints

- $1 \leq N \leq 50$
- $0 \leq K \leq \frac{N(N+1)}{2}$
- $N$ and $K$ are integers.
- $|S| = N$
- $S$ is a string consisting of `A`, `B`, `C`, and `?`.

## Input

The input is given from Standard Input in the following format:

> $N$ $K$
> 
> $S$

## Output

Print the answer modulo $998244353$.

```input1
4 2
A?AB
```

```output1
1
```

By replacing `?` with `A`, `B`, or `C`, we can obtain the following three strings: `AAAB`, `ABAB`, `ACAB`.

Among these, `AAAB` contains two good substrings: the `AA` at positions $1,2$ and the `AA` at positions $2,3$. Note that even if the substrings are identical as strings, they are counted separately if they are at different positions in the original string.

On the other hand, `ABAB` contains only one good substring `ABAB`. Also, `ACAB` contains only one good substring `CAB`.

```input2
50 411
??AB??C???????????????????????????????A???C????A??
```

```output2
457279314
```

Print the count modulo $998244353$.

```input3
1 0
A
```

```output3
1
```