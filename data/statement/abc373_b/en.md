Score : $200$ points

## Problem Statement

There is a keyboard with $26$ keys arranged on a number line.

The arrangement of this keyboard is represented by a string $S$, which is a permutation of `ABCDEFGHIJKLMNOPQRSTUVWXYZ`.
The key corresponding to the character $S_x$ is located at coordinate $x$ $(1 \leq x \leq 26)$. Here, $S_x$ denotes the $x$-th character of $S$.

You will use this keyboard to input `ABCDEFGHIJKLMNOPQRSTUVWXYZ` in this order, typing each letter exactly once with your right index finger.
To input a character, you need to move your finger to the coordinate of the key corresponding to that character and press the key.

Initially, your finger is at the coordinate of the key corresponding to `A`. Find the minimal possible total traveled distance of your finger from pressing the key for `A` to pressing the key for `Z`. Here, pressing a key does not contribute to the distance.

## Constraints

- $S$ is a permutation of `ABCDEFGHIJKLMNOPQRSTUVWXYZ`.

## Input

The input is given from Standard Input in the following format:

> $S$

## Output

Print the answer.

```input1
ABCDEFGHIJKLMNOPQRSTUVWXYZ
```

```output1
25
```

From pressing the key for `A` to pressing the key for `Z`, you need to move your finger $1$ unit at a time in the positive direction, resulting in a total traveled distance of $25$. It is impossible to press all keys with a total traveled distance less than $25$, so print `25`.

```input2
MGJYIZDKSBHPVENFLQURTCWOAX
```

```output2
223
```