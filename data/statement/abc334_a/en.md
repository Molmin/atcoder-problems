Score : $100$ points

## Problem Statement

Takahashi, a young baseball enthusiast, has been a very good boy this year, so Santa has decided to give him a bat or a glove, whichever is more expensive.

If a bat costs $B$ yen and a glove costs $G$ yen ($B\neq G$), which one will Santa give to Takahashi?

## Constraints

- $B$ and $G$ are different integers between $1$ and $1000$, inclusive.

## Input

The input is given from Standard Input in the following format:

> $B$ $G$

## Output

If Santa gives Takahashi a bat, print `Bat`; if Santa gives him a glove, print `Glove`.

```input1
300 100
```

```output1
Bat
```

The bat is more expensive than the glove, so Santa will give Takahashi the bat.

```input2
334 343
```

```output2
Glove
```

The glove is more expensive than the bat, so Santa will give Takahashi the glove.