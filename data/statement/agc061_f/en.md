Score : $2000$ points

## Problem Statement

There are positive integers $N$ and $M$.

A binary string $s$ is called **good** if all of the followings are satisfied:

- $s$ is non-empty.
- The number of `1`s in $s$ is a multiple of $N$.
- The number of `0`s in $s$ is a multiple of $M$.

A good string is called **perfect** if it doesn't contain shorter good (contiguous) substrings. For example, if $N = 3$ and $M = 2$, then strings `111`, `00` and `10101` are perfect, but `0000` and `11001` are not.

One can show that for any $N, M$ the number of perfect strings is finite. Find this number modulo $998\,244\,353$.

## Constraints

- $1 \leq N, M \leq 40$
- All values in the input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$

## Output

Print the answer.

```input1
2 2
```

```output1
4
```

The perfect strings are `00`, `0101`, `1010`, `11`.

```input2
3 2
```

```output2
7
```

The perfect strings are `00`, `01011`, `01101`, `10101`, `10110`, `11010`, `111`.

```input3
23 35
```

```output3
212685109
```