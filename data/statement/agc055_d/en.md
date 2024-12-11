Score : $1200$ points

## Problem Statement

Let's call a string $T$ of length $3N$, containing exactly $N$ letters `A`, $N$ letters `B`, and $N$ letters `C`, **good**, if it can be split into $N$ (not necessarily contiguous) subsequences of length $3$, so that the letters from each subsequence form `ABC`, `BCA`, or `CAB`.

You are given a string $S$ of length $3N$, consisting of characters `A`, `B`, `C`, and `?`.
Count the number of ways to replace each `?` with one of `A`, `B`, and `C`, so that the resulting string is good. As this number can be very large, output it modulo $998244353$.

## Constraints

- $1\le N \le 15$.
- $S$ is a string of length $3N$, consisting of `A`, `B`, `C`, and `?`.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $S$

## Output

Print the answer modulo $998244353$.

```input1
1
???
```

```output1
3
```

There are $3$ good strings you can obtain: `ABC`, `BCA`, and `CAB`.

```input2
2
AA????
```

```output2
2
```

There are $2$ good strings you can obtain: `AABBCC` and `AABCBC`.

```input3
3
?A?A?A?A?
```

```output3
0
```

It's impossible to obtain a good string, as there are already $4$ `A`'s.

```input4
9
?????????A??B??C???????????
```

```output4
331653164
```