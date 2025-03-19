Score : $300$ points

## Problem Statement

You are given a string $S$ consisting of uppercase English letters.<br>
Apply the following procedure to $S$, and then output the resulting string:

As long as the string contains `WA` as a (contiguous) substring, repeat the following operation:

- Among all occurrences of `WA` in the string, replace the leftmost one with `AC`.

It can be proved under the constraints of this problem that this operation is repeated at most a finite number of times.

## Constraints

- $S$ is a string of uppercase English letters with length between 1 and $3\times 10^5$, inclusive.

## Input

The input is given from Standard Input in the following format:

> $S$

## Output

Print the resulting string after performing the procedure described in the problem statement on $S$.

```input1
WACWA
```

```output1
ACCAC
```

Initially, the string is $S=$ `WACWA`.<br>
This string contains `WA` as a substring in two places: from the 1st to the 2nd character, and from the 4th to the 5th character.<br>
In the first operation, we replace the leftmost occurrence (the substring from the 1st to the 2nd character) with `AC`, resulting in `ACCWA`.<br>
After the first operation, the string contains `WA` as a substring in exactly one place: from the 4th to the 5th character.<br>
In the second operation, we replace it with `AC`, resulting in `ACCAC`.<br>
Since `ACCAC` does not contain `WA` as a substring, the procedure ends. Therefore, we output `ACCAC`.

```input2
WWA
```

```output2
ACC
```

Initially, the string is $S=$ `WWA`.<br>
This string contains `WA` as a substring in exactly one place: from the 2nd to the 3rd character.<br>
In the first operation, we replace it with `AC`, resulting in `WAC`.<br>
Then, after the first operation, the string contains `WA` in exactly one place: from the 1st to the 2nd character.<br>
In the second operation, we replace it with `AC`, resulting in `ACC`.<br>
Since `ACC` does not contain `WA` as a substring, the procedure ends. Therefore, we output `ACC`.

```input3
WWWWW
```

```output3
WWWWW
```

Since $S$ does not contain `WA` as a substring from the start, no operations are performed and the procedure ends immediately. Therefore, we output `WWWWW`.