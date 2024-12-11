Score : $100$ points

## Problem Statement

There are two buttons, one of size $A$ and one of size $B$.

When you press a button of size $X$, you get $X$ coins and the size of that button decreases by $1$.

You will press a button twice. Here, you can press the same button twice, or press both buttons once.

At most how many coins can you get?

## Constraints

- All values in input are integers.
- $3 \leq A, B \leq 20$

## Input

Input is given from Standard Input in the following format:

> $A$ $B$

## Output

Print the maximum number of coins you can get.

```input1
5 3
```

```output1
9
```

You can get $5 + 4 = 9$ coins by pressing the button of size $5$ twice, and this is the maximum result.

```input2
3 4
```

```output2
7
```

```input3
6 6
```

```output3
12
```