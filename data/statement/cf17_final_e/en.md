Score : $1000$ points

## Problem Statement

Ringo has a string $S$.

He can perform the following $N$ kinds of operations any number of times in any order.

- Operation $i$: For each of the characters from the $L_i$-th through the $R_i$-th characters in $S$, replace it with its succeeding letter in the English alphabet. (That is, replace `a` with `b`, replace `b` with `c` and so on.) For `z`, we assume that its succeeding letter is `a`.

Ringo loves palindromes and wants to turn $S$ into a palindrome.
Determine whether this is possible.

## Constraints

- $1 \leq |S| \leq 10^5$
- $S$ consists of lowercase English letters.
- $1 \leq N \leq 10^5$
- $1 \leq L_i \leq R_i \leq |S|$

## Input

Input is given from Standard Input in the following format:

> $S$
> 
> $N$
> 
> $L_1$ $R_1$
> 
> $L_2$ $R_2$
> 
> $:$
> 
> $L_N$ $R_N$

## Output

Print `YES` if it is possible to turn $S$ into a palindrome; print `NO` if it is impossible.

```input1
bixzja
2
2 3
3 6
```

```output1
YES
```

For example, if we perform Operation $1$, $2$ and $1$ in this order, $S$ changes as `bixzja` → `bjyzja` → `bjzakb` → `bkaakb` and becomes a palindrome.

```input2
abc
1
2 2
```

```output2
NO
```

```input3
cassert
4
1 2
3 4
1 1
2 2
```

```output3
YES
```