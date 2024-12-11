Score : $100$ points

## Problem Statement

Takahashi likes the sound when he buys a drink from a vending machine.

That sound can be heard by spending $A$ yen (the currency of Japan) each time.

Takahashi has $B$ yen. He will hear the sound as many times as he can with that money, but at most $C$ times, as he would be satisfied at that time.

How many times will he hear the sound?

## Constraints

- All values in input are integers.
- $1 \leq A, B, C \leq 100$

## Input

Input is given from Standard Input in the following format:

> $A$ $B$ $C$

## Output

Print the number of times Takahashi will hear his favorite sound.

```input1
2 11 4
```

```output1
4
```

Since he has not less than $8$ yen, he will hear the sound four times and be satisfied.

```input2
3 9 5
```

```output2
3
```

He may not be able to be satisfied.

```input3
100 1 10
```

```output3
0
```