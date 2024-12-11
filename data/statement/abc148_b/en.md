Score : $200$ points

## Problem Statement

Given are strings $s$ and $t$ of length $N$ each, both consisting of lowercase English letters.

Let us form a new string by alternating the characters of $S$ and the characters of $T$, as follows: the first character of $S$, the first character of $T$, the second character of $S$, the second character of $T$, $...$, the $N$-th character of $S$, the $N$-th character of $T$. Print this new string.

## Constraints

- $1 \leq N \leq 100$
- $|S| = |T| = N$
- $S$ and $T$ are strings consisting of lowercase English letters.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $S$ $T$

## Output

Print the string formed.

```input1
2
ip cc
```

```output1
icpc
```

```input2
8
hmhmnknk uuuuuuuu
```

```output2
humuhumunukunuku
```

```input3
5
aaaaa aaaaa
```

```output3
aaaaaaaaaa
```