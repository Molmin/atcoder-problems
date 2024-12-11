Score : $1600$ points

## Problem Statement

Ringo got interested in modern art. He decided to draw a big picture on the board with $N+2$ rows and $M+2$ columns of squares constructed in the venue of CODE FESTIVAL 2017, using some people.

The square at the $(i+1)$-th row and $(j+1)$-th column in the board is represented by the pair of integers $(i,j)$. That is, the top-left square is $(0,0)$, and the bottom-right square is $(N+1,M+1)$.
Initially, the squares $(x,y)$ satisfying $1 \leq x \leq N$ and $1 \leq y \leq M$ are painted white, and the other (outermost) squares are painted black.

Ringo arranged people at some of the outermost squares, facing inward.
More specifically, the arrangement of people is represented by four strings $A$, $B$, $C$ and $D$, as follows:

- For each row except the top and bottom, if the $i$-th character $(1 \leq i \leq N)$ in $A$ is `1`, place a person facing right at the square $(i,0)$; otherwise, do nothing.
- For each row except the top and bottom, if the $i$-th character $(1 \leq i \leq N)$ in $B$ is `1`, place a person facing left at the square $(i,M+1)$; otherwise, do nothing.
- For each column except the leftmost and rightmost, if the $i$-th character $(1 \leq i \leq M)$ in $C$ is `1`, place a person facing down at the square $(0,i)$; otherwise, do nothing.
- For each column except the leftmost and rightmost, if the $i$-th character $(1 \leq i \leq M)$ in $D$ is `1`, place a person facing up at the square $(N+1,i)$; otherwise, do nothing.

Each person has a sufficient amount of non-white paint. No two people have paint of the same color.

![](https://atcoder.jp/img/code-festival-2017-quala/46a627606452b904221672922d269290.png)

An example of an arrangement of people (For convenience, black squares are displayed in gray)

Ringo repeats the following sequence of operations until all people are dismissed from the venue.

- Select a person who is still in the venue.
- The selected person repeats the following action while the square in front of him/her is white: move one square forward, and paint the square he/she enters with his/her paint. When the square in front of him/her is not white, he/she stops doing the action.
- The person is now dismissed from the venue.

![](https://atcoder.jp/img/code-festival-2017-quala/406bcaf4d52da2ae3b09eedf63ff302e.png)

An example of a way the board is painted

How many different states of the board can Ringo obtain at the end of the process? Find the count modulo $998244353$.

Two states of the board are considered different when there is a square painted in different colors.

## Constraints

- $1 \leq N,M \leq 10^5$
- $|A|=|B|=N$
- $|C|=|D|=M$
- $A$, $B$, $C$ and $D$ consist of `0` and `1`.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A$
> 
> $B$
> 
> $C$
> 
> $D$

## Output

Print the number of the different states of the board Ringo can obtain at the end of the process, modulo $998244353$.

```input1
2 2
10
01
10
01
```

```output1
6
```

There are six possible states as shown below.

![](https://atcoder.jp/img/code-festival-2017-quala/1dd467cdff8a517c9555abfca0915e2e.png)

```input2
2 2
11
11
11
11
```

```output2
32
```

```input3
3 4
111
111
1111
1111
```

```output3
1276
```

```input4
17 21
11001010101011101
11001010011010111
111010101110101111100
011010110110101000111
```

```output4
548356548
```

Be sure to find the count modulo $998244353$.

```input5
3 4
000
101
1111
0010
```

```output5
21
```

```input6
9 13
111100001
010101011
0000000000000
1010111111101
```

```output6
177856
```

```input7
23 30
01010010101010010001110
11010100100100101010101
000101001001010010101010101101
101001000100101001010010101000
```

```output7
734524988
```