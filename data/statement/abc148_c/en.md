Score : $300$ points

## Problem Statement

Takahashi is organizing a party.

At the party, each guest will receive one or more snack pieces.

Takahashi predicts that the number of guests at this party will be $A$ or $B$.

Find the minimum number of pieces that can be evenly distributed to the guests in both of the cases predicted.

We assume that a piece cannot be divided and distributed to multiple guests.

## Constraints

- $1 \leq A, B \leq 10^5$
- $A \neq B$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $A$ $B$

## Output

Print the minimum number of pieces that can be evenly distributed to the guests in both of the cases with $A$ guests and $B$ guests.

```input1
2 3
```

```output1
6
```

When we have six snack pieces, each guest can take three pieces if we have two guests, and each guest can take two if we have three guests.

```input2
123 456
```

```output2
18696
```

```input3
100000 99999
```

```output3
9999900000
```