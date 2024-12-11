Score : $100$ points

## Problem Statement

Serval, Fennec, and Raccoon played rock-paper-scissors and had a draw.

You are given characters $x$ and $y$ representing the hand thrown by Fennec and Raccoon, respectively. Here, `0` stands for rock, `1` stands for scissors, and `2` stands for paper.

Print the character corresponding to the hand thrown by Serval, which can be uniquely determined.

## Constraints

- Each of $x$ and $y$ is `0`, `1`, or `2`.

## Input

Input is given from Standard Input in the following format:

> $x$ $y$

## Output

Print the answer, which should be `0` for rock, `1` for scissors, or `2` for paper.

```input1
0 1
```

```output1
2
```

Fennec threw rock, and Raccoon threw scissors. To have a draw, Serval must have thrown paper.

```input2
0 0
```

```output2
0
```

Fennec threw rock, and Raccoon threw rock. To have a draw, Serval must have thrown rock.