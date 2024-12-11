Score : $100$ points

## Problem Statement

Takahashi turned on a computer at time $0$ and clicked the mouse $N$ times.  The $i$-th $(1 \le i \le N)$ click was at time $T_i$.

If he consecutively clicked the mouse at time $x_1$ and time $x_2$ (where $x_1 &lt; x_2$), a double click is said to be fired at time $x_2$ if and only if $x_2 - x_1 \le D$.

What time was a double click fired for the first time?  If no double click was fired, print `-1` instead.

## Constraints

- $1 \le N \le 100$
- $1 \le D \le 10^9$
- $1 \le T_i \le 10^9(1 \le i \le N)$
- $T_i &lt; T_{i+1}(1 \le i \le N-1)$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $D$
> 
> $T_1$ $T_2$ $\dots$ $T_N$

## Output

If at least one double click was fired, print the time of the first such event; otherwise, print `-1`.

```input1
4 500
300 900 1300 1700
```

```output1
1300
```

Takahashi clicked the mouse at time $900$ and $1300$.  Since $1300 - 900 \le 500$, a double click was fired at time $1300$.

A double click had not been fired before time $1300$, so $1300$ should be printed.

```input2
5 99
100 200 300 400 500
```

```output2
-1
```

No double click was fired, so print `-1`.

```input3
4 500
100 600 1100 1600
```

```output3
600
```

If multiple double clicks were fired, be sure to print only the first such event.