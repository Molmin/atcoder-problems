Score : $600$ points

## Problem Statement

A positive-integer sequence is said to be **splendid** if no two adjacent elements are equal.

Find the sum, modulo $998244353$, of the lengths of all splendid sequences whose elements have a sum of $N$.

## Constraints

- $1 \le N \le 2 \times 10^5$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$

## Output

Print the answer.

```input1
4
```

```output1
8
```

There are four splendid sequences whose sum is $4$: $(4),(1,3),(3,1),(1,2,1)$.  Thus, the answer is the sum of their lengths: $1+2+2+3=8$.

$(2,2)$ and $(1,1,2)$ also have a sum of $4$ but ineligible because their $1$-st and $2$-nd elements are the same.

```input2
297
```

```output2
475867236
```

```input3
123456
```

```output3
771773807
```