Score : $100$ points

## Problem Statement

AtCoder Beginner Contest usually starts at 21:00 JST and lasts for $100$ minutes.

You are given an integer $K$ between $0$ and $100$ (inclusive). Print the time $K$ minutes after 21:00 in the `HH:MM` format, where `HH` denotes the hour on the $24$-hour clock and `MM` denotes the minute. If the hour or the minute has just one digit, append a $0$ to the beginning to represent it as a $2$-digit integer.

## Constraints

- $K$ is an integer between $0$ and $100$ (inclusive).

## Input

Input is given from Standard Input in the following format:

> $K$

## Output

Print the time $K$ minutes after 21:00 in the format specified in the Problem Statement.

```input1
63
```

```output1
22:03
```

$63$ minutes after 21:00, it will be 22:03, so `22:03` should be printed.

The following outputs would be judged incorrect:

- `10:03`
- `22:3`

```input2
45
```

```output2
21:45
```

```input3
100
```

```output3
22:40
```