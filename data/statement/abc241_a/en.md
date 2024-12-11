Score : $100$ points

## Problem Statement

There is a device with a screen that shows a single-digit number, and a button.  

When the screen is showing a number $k$, pressing the button once changes the number on the screen to $a_k$.  

The device currently shows $0$.  After pressing the button $3$ times, what will be shown on the screen?

## Constraints

- $0\leq a_i \leq 9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $a_0$ $a_1$ $\dots$ $a_9$

## Output

Print the answer.  

```input1
9 0 1 2 3 4 5 6 7 8
```

```output1
7
```

The number on the screen transitions as $0 \rightarrow 9 \rightarrow 8 \rightarrow 7$.  

```input2
4 8 8 8 0 8 8 8 8 8
```

```output2
4
```

The number on the screen transitions as $0 \rightarrow 4 \rightarrow 0 \rightarrow 4$.  

```input3
0 0 0 0 0 0 0 0 0 0
```

```output3
0
```