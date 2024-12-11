Score : $100$ points

## Problem Statement

Snuke is buying a bicycle.
The bicycle of his choice does not come with a bell, so he has to buy one separately.

He has very high awareness of safety, and decides to buy two bells, one for each hand.

The store sells three kinds of bells for the price of $a$, $b$ and $c$ yen (the currency of Japan), respectively.
Find the minimum total price of two different bells.

## Constraints

- $1 \leq a,b,c \leq 10000$
- $a$, $b$ and $c$ are integers.

## Input

Input is given from Standard Input in the following format:

> $a$ $b$ $c$

## Output

Print the minimum total price of two different bells.

```input1
700 600 780
```

```output1
1300
```

- Buying a $700$-yen bell and a $600$-yen bell costs $1300$ yen.
- Buying a $700$-yen bell and a $780$-yen bell costs $1480$ yen.
- Buying a $600$-yen bell and a $780$-yen bell costs $1380$ yen.

The minimum among these is $1300$ yen.

```input2
10000 10000 10000
```

```output2
20000
```

Buying any two bells costs $20000$ yen.