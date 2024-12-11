Score : $300$ points

## Problem Statement

We have a string $X$, which has an even number of characters. Half the characters are `S`, and the other half are `T`.

Takahashi, who hates the string `ST`, will perform the following operation $10^{10000}$ times:

- Among the occurrences of `ST` in $X$ as (contiguous) substrings, remove the leftmost one. If there is no occurrence, do nothing.

Find the eventual length of $X$.

## Constraints

- $2 \leq |X| \leq 200,000$
- The length of $X$ is even.
- Half the characters in $X$ are `S`, and the other half are `T`.

## Partial Scores

- In test cases worth $200$ points, $|X| \leq 200$.

## Input

The input is given from Standard Input in the following format:

> $X$

## Output

Print the eventual length of $X$.

```input1
TSTTSS
```

```output1
4
```

In the $1$-st operation, the $2$-nd and $3$-rd characters of `TSTTSS` are removed.
$X$ becomes `TTSS`, and since it does not contain `ST` anymore, nothing is done in the remaining $10^{10000}-1$ operations.
Thus, the answer is $4$.

```input2
SSTTST
```

```output2
0
```

$X$ will eventually become an empty string: `SSTTST` ⇒ `STST` ⇒ `ST` ⇒ ``.

```input3
TSSTTTSS
```

```output3
4
```

$X$ will become: `TSSTTTSS` ⇒ `TSTTSS` ⇒ `TTSS`.