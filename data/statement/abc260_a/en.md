Score : $100$ points

## Problem Statement

You are given a string $S$ of length $3$.<br>
Print a character that occurs only once in $S$.<br>
If there is no such character, print `-1` instead.

## Constraints

- $S$ is a string of length $3$ consisting of lowercase English letters.

## Input

Input is given from Standard Input in the following format:

> $S$

## Output

Print the answer.  If multiple solutions exist, you may print any of them.

```input1
pop
```

```output1
o
```

`o` occurs only once in `pop`.

```input2
abc
```

```output2
a
```

`a`, `b`, and `c` occur once each in `abc`, so you may print any of them.

```input3
xxx
```

```output3
-1
```

No character occurs only once in `xxx`.