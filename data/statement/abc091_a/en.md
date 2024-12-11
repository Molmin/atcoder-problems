Score : $100$ points

## Problem Statement

An elementary school student Takahashi has come to a variety store.

He has two coins, $A$-yen and $B$-yen coins (yen is the currency of Japan), and wants to buy a toy that costs $C$ yen. Can he buy it?

Note that he lives in Takahashi Kingdom, and may have coins that do not exist in Japan.

## Constraints

- All input values are integers.
- $1 \leq A, B \leq 500$
- $1 \leq C \leq 1000$

## Input

Input is given from Standard Input in the following format:

> $A$ $B$ $C$

## Output

If Takahashi can buy the toy, print `Yes`; if he cannot, print `No`.

```input1
50 100 120
```

```output1
Yes
```

He has $50 + 100 = 150$ yen, so he can buy the $120$-yen toy.

```input2
500 100 1000
```

```output2
No
```

He has $500 + 100 = 600$ yen, but he cannot buy the $1000$-yen toy.

```input3
19 123 143
```

```output3
No
```

There are $19$-yen and $123$-yen coins in Takahashi Kingdom, which are rather hard to use.

```input4
19 123 142
```

```output4
Yes
```