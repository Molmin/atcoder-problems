Score : $150$ points

## Problem Statement

In the Kingdom of AtCoder, residents are required to shout their love for takoyaki at $A$ o'clock every day.

Takahashi, who lives in the Kingdom of AtCoder, goes to bed at $B$ o'clock and wakes up at $C$ o'clock every day (in the $24$-hour clock). He can shout his love for takoyaki when he is awake, but cannot when he is asleep. Determine whether he can shout his love for takoyaki every day. Here, a day has $24$ hours, and his sleeping time is less than $24$ hours.

## Constraints

- $0\leq A,B,C\lt 24$
- $A$, $B$, and $C$ are pairwise different.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $A$ $B$ $C$

## Output

Print `Yes` if Takahashi can shout his love for takoyaki every day, and `No` otherwise.

```input1
21 8 14
```

```output1
Yes
```

Takahashi goes to bed at $8$ o'clock and wakes up at $14$ o'clock every day. He is awake at $21$ o'clock, so he can shout his love for takoyaki every day. Therefore, print `Yes`.

```input2
0 21 7
```

```output2
No
```

Takahashi goes to bed at $21$ o'clock and wakes up at $7$ o'clock every day. He is not awake at $0$ o'clock, so he cannot shout his love for takoyaki every day. Therefore, print `No`.

```input3
10 7 17
```

```output3
No
```