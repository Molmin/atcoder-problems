Score : $100$ points

## Problem Statement

Given a length-$3$ string $S$ consisting of uppercase English letters, print `Yes` if $S$ equals one of `ACE`, `BDF`, `CEG`, `DFA`, `EGB`, `FAC`, and `GBD`; print `No` otherwise.

## Constraints

- $S$ is a length-$3$ string consisting of uppercase English letters.

## Input

The input is given from Standard Input in the following format:

> $S$

## Output

Print `Yes` if $S$ equals one of `ACE`, `BDF`, `CEG`, `DFA`, `EGB`, `FAC`, and `GBD`; print `No` otherwise.

```input1
ABC
```

```output1
No
```

When $S =$ `ABC`, $S$ does not equal any of `ACE`, `BDF`, `CEG`, `DFA`, `EGB`, `FAC`, and `GBD`, so `No` should be printed.

```input2
FAC
```

```output2
Yes
```

```input3
XYX
```

```output3
No
```