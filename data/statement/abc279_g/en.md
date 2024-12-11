Score : $600$ points

## Problem Statement

There is a grid with $1 \times N$ squares, numbered $1,2,\dots,N$ from left to right.

Takahashi prepared paints of $C$ colors and painted each square in one of the $C$ colors.<br>
Then, there were at most two colors in any consecutive $K$ squares.<br>
Formally, for every integer $i$ such that $1 \le i \le N-K+1$, there were at most two colors in squares $i,i+1,\dots,i+K-1$.

In how many ways could Takahashi paint the squares?<br>
Since this number can be enormous, find it modulo $998244353$.

## Constraints

- All values in the input are integers.
- $2 \le K \le N \le 10^6$
- $1 \le C \le 10^9$

## Input

The input is given from Standard Input in the following format:

> $N$ $K$ $C$

## Output

Print the answer as an integer.

```input1
3 3 3
```

```output1
21
```

In this input, we have a $1 \times 3$ grid.<br>
Among the $27$ ways to paint the squares, there are $6$ ways to paint all squares in different colors, and the remaining $21$ ways are such that there are at most two colors in any consecutive three squares.

```input2
10 5 2
```

```output2
1024
```

Since $C=2$, no matter how the squares are painted, there are at most two colors in any consecutive $K$ squares.

```input3
998 244 353
```

```output3
952364159
```

Print the number modulo $998244353$.