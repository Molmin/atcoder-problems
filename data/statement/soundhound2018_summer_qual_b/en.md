Score : $200$ points

## Problem Statement

You are given a string $S$ consisting of lowercase English letters.
We will write down this string, starting a new line after every $w$ letters. Print the string obtained by concatenating the letters at the beginnings of these lines from top to bottom.

## Constraints

- $1 \leq w \leq |S| \leq 1000$
- $S$ consists of lowercase English letters.
- $w$ is an integer.

## Input

Input is given from Standard Input in the following format:

> $S$
> 
> $w$

## Output

Print the desired string in one line.

```input1
abcdefgh
3
```

```output1
adg
```

When we write down `abcdefgh`, starting a new line after every three letters, we get the following:

abc<br>
def<br>
gh

Concatenating the letters at the beginnings of these lines, we obtain `adg`.

```input2
lllll
1
```

```output2
lllll
```

```input3
souuundhound
2
```

```output3
suudon
```