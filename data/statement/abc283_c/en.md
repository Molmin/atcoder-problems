Score : $300$ points

## Problem Statement

Takahashi is a cashier.

There is a cash register with $11$ keys: `00`, `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, and `9`.
The cash register initially displays $0$.
Whenever he types the key `00`, the displayed number is multiplied by $100$;
whenever he types one of the others, the displayed number is multiplied by $10$, and then added by the number written on the key.

Takahashi wants the cash register to display an integer $S$.
At least how many keystrokes are required to make it display $S$?

## Constraints

- $1\leq S\leq 10^{100000}$
- $S$ is an integer.

## Input

The input is given from Standard Input in the following format:

> $S$

## Output

Print the answer in a line.

```input1
40004
```

```output1
4
```

For example, the following four keystrokes make the cash register display $40004$.
Initially, the cash register displays $0$.

- Type the key `4`.  It now displays $4$.
- Type the key `00`.  It now displays $400$.
- Type the key `0`.  It now displays $4000$.
- Type the key `4`.  It now displays $40004$.

He cannot make it display $40004$ with three or fewer keystrokes, so $4$ should be printed.

```input2
1355506027
```

```output2
10
```

```input3
10888869450418352160768000001
```

```output3
27
```

Note that $S$ may not fit into a $64$-$\operatorname{bit}$ integer type.