Score : $200$ points

## Problem Statement

You are given strings $s$ and $t$, consisting of lowercase English letters.
You will create a string $s'$ by freely rearranging the characters in $s$.
You will also create a string $t'$ by freely rearranging the characters in $t$.
Determine whether it is possible to satisfy $s' &lt; t'$ for the lexicographic order.

## Notes

For a string $a = a_1 a_2 ... a_N$ of length $N$ and a string $b = b_1 b_2 ... b_M$ of length $M$, we say $a &lt; b$ for the lexicographic order if either one of the following two conditions holds true:

- $N &lt; M$ and $a_1 = b_1$, $a_2 = b_2$, ..., $a_N = b_N$.
- There exists $i$ ($1 \leq i \leq N, M$) such that $a_1 = b_1$, $a_2 = b_2$, ..., $a_{i - 1} = b_{i - 1}$ and $a_i &lt; b_i$. Here, letters are compared using alphabetical order.

For example, `xy` $&lt;$ `xya` and `atcoder` $&lt;$ `atlas`.

## Constraints

- The lengths of $s$ and $t$ are between $1$ and $100$ (inclusive).
- $s$ and $t$ consists of lowercase English letters.

## Input

Input is given from Standard Input in the following format:

> $s$
> 
> $t$

## Output

If it is possible to satisfy $s' &lt; t'$, print `Yes`; if it is not, print `No`.

```input1
yx
axy
```

```output1
Yes
```

We can, for example, rearrange `yx` into `xy` and `axy` into `yxa`. Then, `xy` $&lt;$ `yxa`.

```input2
ratcode
atlas
```

```output2
Yes
```

We can, for example, rearrange `ratcode` into `acdeort` and `atlas` into `tslaa`. Then, `acdeort` $&lt;$ `tslaa`.

```input3
cd
abc
```

```output3
No
```

No matter how we rearrange `cd` and `abc`, we cannot achieve our objective.

```input4
w
ww
```

```output4
Yes
```

```input5
zzz
zzz
```

```output5
No
```