Score : $200$ points

## Problem Statement

Takahashi has $A$ cookies, and Aoki has $B$ cookies.
Takahashi will do the following action $K$ times:

- If Takahashi has one or more cookies, eat one of his cookies.
- Otherwise, if Aoki has one or more cookies, eat one of Aoki's cookies.
- If they both have no cookies, do nothing.

In the end, how many cookies will Takahashi and Aoki have, respectively?

## Constraints

- $0 \leq A \leq 10^{12}$
- $0 \leq B \leq 10^{12}$
- $0 \leq K \leq 10^{12}$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $A$ $B$ $K$

## Output

Print the numbers of Takahashi's and Aoki's cookies after $K$ actions.

```input1
2 3 3
```

```output1
0 2
```

Takahashi will do the following:

- He has two cookies, so he eats one of them.
- Now he has one cookie left, and he eats it.
- Now he has no cookies left, but Aoki has three, so Takahashi eats one of them.

Thus, in the end, Takahashi will have $0$ cookies, and Aoki will have $2$.

```input2
500000000000 500000000000 1000000000000
```

```output2
0 0
```

Watch out for overflows.