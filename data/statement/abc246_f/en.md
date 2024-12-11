Score : $500$ points

## Problem Statement

We have a typewriter with $N$ rows. The keys in the $i$-th row from the top can type the characters in a string $S_i$.

Let us use this keyboard to enter a string, as follows.

- First, choose an integer $1 \le k \le N$.
- Then, start with an empty string and only use the keys in the $k$-th row from the top to enter a string of length exactly $L$.

How many strings of length $L$ can be entered in this way?
Since the answer can be enormous, print it modulo $998244353$.

## Constraints

- $N$ and $L$ are integers.
- $1 \le N \le 18$
- $1 \le L \le 10^9$
- $S_i$ is a (not necessarily contiguous) non-empty subsequence of `abcdefghijklmnopqrstuvwxyz`.

## Input

Input is given from Standard Input in the following format:

> $N$ $L$
> 
> $S_1$
> 
> $S_2$
> 
> $\dots$
> 
> $S_N$

## Output

Print the answer.

```input1
2 2
ab
ac
```

```output1
7
```

We can enter seven strings: `aa`, `ab`, `ac`, `ba`, `bb`, `ca`, `cc`.

```input2
4 3
abcdefg
hijklmnop
qrstuv
wxyz
```

```output2
1352
```

```input3
5 1000000000
abc
acde
cefg
abcfh
dghi
```

```output3
346462871
```

Be sure to print the answer modulo $998244353$.