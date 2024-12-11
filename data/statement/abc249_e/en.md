Score : $500$ points

## Problem Statement

Consider the following procedure of, given a string $X$ consisting of lowercase English alphabets, obtaining a new string:

- Split the string $X$ off at the positions where two different characters are adjacent to each other.
- For each string $Y$ that has been split off, replace $Y$ with a string consisting of the character which $Y$ consists of, followed by the length of $Y$.
- Concatenate the replaced strings without changing the order.

For example, `aaabbcccc` is divided into `aaa`,`bb`,`cccc`, which are replaced by `a3`,`b2`,`c4`, respectively, which in turn are concatenated without changing the order, resulting in `a3b2c4`.If the given string is `aaaaaaaaaa` , the new string is `a10` .

Find the number, modulo $P$, of strings $S$ of lengths $N$ consisting of lowercase English alphabets, such that the length of $T$ is smaller than that of $S$, where $T$ is the string obtained by the procedure above against the string $S$.

## Constraints

- $1 \le N \le 3000$
- $10^8 \le P \le 10^9$
- $N$ and $P$ are integers.
- $P$ is a prime.

## Input

Input is given from Standard Input in the following format:

> $N$ $P$

## Output

Print the answer.

```input1
3 998244353
```

```output1
26
```

Those strings of which the $1$-st, $2$-nd, and $3$-rd characters are all the same satisfy the condition.

For example, `aaa` becomes `a3`, which satisfies the condition, while `abc` becomes `a1b1c1`, which does not.

```input2
2 998244353
```

```output2
0
```

Note that if a string is transformed into another string of the same length, such as `aa` that becomes `a2`, it does not satisfy the condition.  

```input3
5 998244353
```

```output3
2626
```

Strings like `aaabb` and `aaaaa` satisfy the condition.

```input4
3000 924844033
```

```output4
607425699
```

Find the number of strings satisfying the condition modulo $P$.