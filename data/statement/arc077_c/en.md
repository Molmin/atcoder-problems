Score : $700$ points

## Problem Statement

Snuke is buying a lamp.
The light of the lamp can be adjusted to $m$ levels of brightness, represented by integers from $1$ through $m$, by the two buttons on the remote control.

The first button is a "forward" button. When this button is pressed, the brightness level is increased by $1$, except when the brightness level is $m$, in which case the brightness level becomes $1$.

The second button is a "favorite" button. When this button is pressed, the brightness level becomes the favorite brightness level $x$, which is set when the lamp is purchased.

Snuke is thinking of setting the favorite brightness level $x$ so that he can efficiently adjust the brightness.
He is planning to change the brightness $n-1$ times. In the $i$-th change, the brightness level is changed from $a_i$ to $a_{i+1}$. The initial brightness level is $a_1$.
Find the number of times Snuke needs to press the buttons when $x$ is set to minimize this number.

## Constraints

- $2 \leq n,m \leq 10^5$
- $1 \leq a_i\leq m$
- $a_i \neq a_{i+1}$
- $n$, $m$ and $a_i$ are integers.

## Input

Input is given from Standard Input in the following format:

> $n$ $m$
> 
> $a_1$ $a_2$ … $a_n$

## Output

Print the minimum number of times Snuke needs to press the buttons.

```input1
4 6
1 5 1 4
```

```output1
5
```

When the favorite brightness level is set to $1$, $2$, $3$, $4$, $5$ and $6$, Snuke needs to press the buttons $8$, $9$, $7$, $5$, $6$ and $9$ times, respectively.
Thus, Snuke should set the favorite brightness level to $4$.
In this case, the brightness is adjusted as follows:

- In the first change, press the favorite button once, then press the forward button once.
- In the second change, press the forward button twice.
- In the third change, press the favorite button once.

```input2
10 10
10 9 8 7 6 5 4 3 2 1
```

```output2
45
```