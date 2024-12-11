Score : $100$ points

## Problem Statement

Takahashi, who is $A$ years old, is riding a Ferris wheel.

It costs $B$ yen ($B$ is an even number) to ride the Ferris wheel if you are $13$ years old or older, but children between $6$ and $12$ years old (inclusive) can ride it for half the cost, and children who are $5$ years old or younger are free of charge. (Yen is the currency of Japan.)

Find the cost of the Ferris wheel for Takahashi.

## Constraints

- $0 \leq A \leq 100$
- $2 \leq B \leq 1000$
- $B$ is an even number.

## Input

Input is given from Standard Input in the following format:

> $A$ $B$

## Output

Print the cost of the Ferris wheel for Takahashi.

```input1
30 100
```

```output1
100
```

Takahashi is $30$ years old now, and the cost of the Ferris wheel is $100$ yen.

```input2
12 100
```

```output2
50
```

Takahashi is $12$ years old, and the cost of the Ferris wheel is the half of $100$ yen, that is, $50$ yen.

```input3
0 100
```

```output3
0
```

Takahashi is $0$ years old, and he can ride the Ferris wheel for free.