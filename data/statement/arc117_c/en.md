Score : $600$ points

## Problem Statement

We have $N$ blocks arranged in a row, where each block is painted blue, white, or red.
The color of the $i$-th block from the left $(1 \leq i \leq N)$ is represented by a character $c_i$; `B`, `W`, and `R` stand for blue, white, and red, respectively.

From this situation, we will pile up blue, white, and red blocks to make a pyramid with $N$ steps. The following figure shows an example of this:

![](https://img.atcoder.jp/arc117/92dfa6597ada13a2682a8c41e06d799e.png)

 

Here, we place blocks one by one from bottom to top as follows:

- if the two blocks immediately below a position have the same color, we will place there a block of the same color;
- if the two blocks immediately below a position have different colors, we will place there a block of the color different from those two colors.

What will be the color of the block at the top?

## Constraints

- $N$ is an integer satisfying $2 \leq N \leq 400000$.
- Each of $c_1, c_2, \dots, c_N$ is `B`, `W`, or `R`.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $c_1$$c_2$$\cdots$$c_N$

## Output

If the topmost block will be blue, print `B`; if it will be white, print `W`; if it will be red, print `R`.

```input1
3
BWR
```

```output1
W
```

In this case, we will pile up blocks as follows:

- the $1$-st and $2$-nd blocks from the left in the bottom row are respectively blue and white, so we place a red block on top of it;
- the $2$-nd and $3$-rd blocks from the left in the bottom row are respectively white and red, so we place a blue block on top of it;
- the blocks in the $2$-nd row from the bottom are respectively red and blue, so we place a white block on top of it.

Thus, the block at the top will be white; we should print `W`.

```input2
4
RRBB
```

```output2
W
```

In this case, we will pile up blocks as follows:

- the $1$-st and $2$-nd blocks from the left in the bottom row are both red, so we place a red block on top of it;
- the $2$-nd and $3$-rd blocks from the left in the bottom row are respectively red and blue, so we place a white block on top of it;
- the $3$-rd and $4$-th blocks from the left in the bottom row are both blue, so we place a blue block on top of it;
- the $1$-st and $2$-nd blocks from the left in the $2$-nd row from the bottom are respectively red and white, so we place a blue block on top of it;
- the $2$-nd and $3$-rd blocks from the left in the $2$-nd row from the bottom are respectively white and blue, so we place a red block on top of it;
- the blocks in the $3$-rd row from the bottom are respectively blue and red, so we place a white block on top of it.

Thus, the block at the top will be white; we should print `W`.

```input3
6
BWWRBW
```

```output3
B
```

The figure below shows the final arrangement of blocks. The block at the top will be blue; we should print `B`.

![](https://img.atcoder.jp/arc117/333af8ef18ae0a6ce966c46492cb07e6.png)

Note that this is the case shown as an example in Problem Statement.

```input4
8
WWBRBBWB
```

```output4
R
```

The figure below shows the final arrangement of blocks. The block at the top will be red; we should print `R`.

![](https://img.atcoder.jp/arc117/36a2a6777ac49fa0bb43440de385dced.png)

```input5
21
BWBRRBBRWBRBBBRRBWWWR
```

```output5
B
```