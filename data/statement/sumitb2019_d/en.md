Score: $400$ points

## Problem Statement

AtCoder Inc. has decided to lock the door of its office with a $3$-digit PIN code.

The company has an $N$-digit lucky number, $S$. Takahashi, the president, will erase $N-3$ digits from $S$ and concatenate the remaining $3$ digits without changing the order to set the PIN code.

How many different PIN codes can he set this way?

Both the lucky number and the PIN code may begin with a $0$.

## Constraints

- $4 \leq N \leq 30000$
- $S$ is a string of length $N$ consisting of digits.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $S$

## Output

Print the number of different PIN codes Takahashi can set.

```input1
4
0224
```

```output1
3
```

Takahashi has the following options:

- Erase the first digit of $S$ and set `224`.
- Erase the second digit of $S$ and set `024`.
- Erase the third digit of $S$ and set `024`.
- Erase the fourth digit of $S$ and set `022`.

Thus, he can set three different PIN codes: `022`, `024`, and `224`.

```input2
6
123123
```

```output2
17
```

```input3
19
3141592653589793238
```

```output3
329
```