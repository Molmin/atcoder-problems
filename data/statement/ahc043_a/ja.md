##  ストーリー 

                

Nihonbashi Simulator は架空の国Rの鉄道会社Xを経営するターン制のシミュレーションゲームである。あなたはこのゲームの大ファンであり、高い収益を上げる会社にすることを目標としている。線路と駅を適切に建設することで、R国に住む人の通勤を手助けしつつ、Xを最高の鉄道会社に育て上げよう!

                

## 問題文

                

                    R国は $N$ 行 $N$ 列のグリッド状に分けられた区画からなる。上から $i$ 行目 $(0 \le i &lt; N)$、左から $j$ 列目 $(0 \le j &lt; N)$ の区画を $(i,j)$ とする。各区画は更地、線路、駅のいずれかである:
                    

- 更地
                            -   - 他の区画と接続しない。
-   - コストを払うことで、駅または線路を建設することができる。
- 線路
                            -   - 上下左右の更地でない区画のうち、最大2つの区画と接続する。線路は接続先に応じて6種類あり、以下の図のように番号付けられる。
-   - コストを払うことで、駅に置き換えることができる。
- 駅
                        -   - 上下左右の最大4つの更地でない区画と接続する。

                

                

                    

                        
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            1
                            
                            
                            2
                            
                            
                            3
                            
                            
                            4
                            
                            
                            5
                            
                            
                            6
                            
                            
                            
                                
                                
                                
                                
                                
                                
                                
                            
                            
                                
                                
                                
                                
                                
                                
                                
                            
                            
                            
                            
                            
                            
                            
                            
                        
                        線路の種類
                    
                

                

                    R国には $M$ 人の人が住んでいる。人 $c$ の家は区画 $(i_{c,s}, j_{c,s})$、職場は区画 $(i_{c,t}, j_{c,t})$ にあり、この間を通勤している。
                    

                    

ゲーム開始時、鉄道会社Xは $K$ の資金を持っており、全ての区画は更地である。ここから $T$ ターンの間ゲームを行う。
                

                

## ゲームのすすめ方

                    

各ターンでは、建設フェーズと集金フェーズがこの順で実行される。

                

### 建設フェーズ

                    

建設フェーズでは、線路の配置・駅の配置・待機のうち1つの行動を行う。ただし、資金が0未満になるような行動はできない。資金が0未満かどうかの判定は集金フェーズの前に行われる。

                    

- 線路の配置: 更地の区画を1つ選び、その区画を6種類の線路のいずれか1つに変更する。資金が100減る。
- 駅の配置: 更地または線路の区画を1つ選び、その区画を駅に変更する。資金が5000減る。
- 待機: 区画の状態と資金は変化しない。

                

### 集金フェーズ

                

R国に住む人が一斉に通勤を行う。人 $c$ は、以下の条件を満たす区画 $(i_p, j_p)$, $(i_q, j_q)$ が存在するときのみ、鉄道会社Xの鉄道を利用して料金を払う。
人 $c$ が鉄道を利用したとき、鉄道会社Xの資金が $|i_{c,s} - i_{c,t}| + |j_{c, s} - j _{c, t} |$ 増える。

                    

                        

- 区画 $(i_p, j_p), (i_q, j_q)$ は駅である。
- 区画 $(i_p, j_p)$ から、$0$ 個以上の互いに接続された駅の区画または線路の区画を経由して、 $(i_q, j_q)$ に到達できる。
- $| i_{c,s} - i_p| + | j_{c,s} - j_p| \leq 2$
- $| i_{c,t} - i_q| + | j_{c,t} - j_q| \leq 2$

                    

                
                

$T$ ターン終了時点での資金ができるだけ大きくなるように行動を決めよ。

            
        
        
        
            
                

## 得点

                

                    各テストケース毎に、 $T$ ターン終了時点での資金の値を絶対スコアとして
                    <span id="math">\( \text{round}(10^9 \times \left(\frac{自身の絶対スコア}{全参加者中の最大絶対スコア}\right)) \)</span>の<font color="red">**相対評価スコア**</font>が得られ、その和が提出の得点となる。
                    ただし、 $全参加者中の最大絶対スコア$ が $0$ のテストケースにおいては、 AC した全参加者の相対評価スコアが $10^9$ となる。
                

                

                    以下に挙げる不正な出力をした場合、WAと判定される。
                    

- 駅または線路の区画への線路の配置
- 駅の区画への駅の配置
- 資金が 0 未満になるような配置
- 線路の種類や区画の指定が不正な配置
- 出力した行動の数が $T$ 個でない

                

                

                    最終順位はコンテスト終了後に実施されるより多くの入力に対するシステムテストにおける得点で決定される。暫定テスト、システムテストともに、一部のテストケースで不正な出力や制限時間超過をした場合、そのテストケースの相対評価スコアは0点となり、そのテストケースにおいては「全参加者中の最大絶対スコア」の計算から除外される。システムテストは <font color="red">**CE 以外の結果を得た一番最後の提出**</font>に対してのみ行われるため、最終的に提出する解答を間違えないよう注意せよ。
                

                

### テストケース数

                

- 暫定テスト: 50個
- システムテスト: 2000個
                        -   - コンテスト終了後に [seeds.txt](https://img.atcoder.jp/ahc043/seeds.txt) (sha256=`ed5b3f922dc3633bade3f70cc6f1dd1bb3087dba36ce26ce9d4888ce2ec7a247`) を公開します。

                

### 相対評価システムについて

                

                    暫定テスト・システムテストともに、CE以外の結果を得た一番最後の提出のみが順位表に反映される。<br>
                    相対評価スコアの計算に用いられる各テストケース毎の全参加者中の最大絶対スコアの算出についても、順位表に反映されている最終提出のみが用いられる。<br>
                

                

                    順位表に表示されているスコアは相対評価スコアであり、新規提出があるたびに、相対評価スコアが再計算される。一方、提出一覧から確認出来る各提出のスコアは各テストケース毎の絶対スコアをそのまま足し合わせたものであり、相対評価スコアは表示されない。最新以外の提出の、現在の順位表における相対評価スコアを知るためには、再提出が必要である。不正な出力や制限時間超過をした場合、提出一覧から確認出来るスコアは0となるが、順位表には正解したテストケースに対する相対評価スコアの和が表示されている。
                

                

### 実行時間について

                

                    実行時間には多少のブレが生じます。
                    また、システムテストでは同時に大量の実行を行うため、暫定テストに比べて数%程度実行時間が伸びる現象が確認されています。
                    そのため、実行時間制限ギリギリの提出がシステムテストで TLE となる可能性があります。
                    プログラム内で時間を計測して処理を打ち切るか、実行時間に余裕を持たせるようお願いします。
                

            
        
    

    
        
            
                

## 入力

                

入力は以下の形式で標準入力から与えられる。

> \(
> 
> N ~ M ~ K ~ T\\
> 
> i_{0, s} ~ j_{0, s} ~ i_{0, t} ~ j_{0, t} \\
> 
> i_{1, s} ~ j_{1, s} ~ i_{1, t} ~ j_{1, t} \\
> 
> \vdots \\
> 
> i_{M-1, s} ~ j_{M-1, s} ~ i_{M-1, t} ~ j_{M-1, t}
> 
> \)
        

- 1行目には4つの整数 $N,M,K,T$ がスペース区切りで与えられる。
                -   - $N$ は区画の縦・横の数で、 $N = 50$ を満たす。
-   - $M$ はR国の人の数で、 $50 \le M \le 1600$ を満たす。
-   - $K$ は鉄道会社Xの初期資金であり、 $11000 \leq K \leq 20000$ を満たす。
-   - $T$ はゲームのターン数であり、 $T = 800$ を満たす。
- 続く $M$ 行にR国に住む人の通勤に関する情報が与えられる。各行はスペース区切りの4つの整数であり、人 $c$ の家の位置は区画 $(i_{c,s}, j_{c,s})$、職場の位置は区画 $(i_{c, t}, j_{c,t} )$ である。$0 \leq i_{c, s}, i_{c, t} \lt N, 0 \leq j_{c, s}, j_{c, t} \lt N, | i_{c,s} - i_{c,t} | + | j_{c,s} - j_{c,t} | \gt 4 (0 \leq c \lt M)$ を満たす。

        

## 出力

        

 $T$ 行出力せよ。$t$ 行目には、$t$ 回目の建設フェーズでの行動を以下のフォーマットで出力せよ。

            

- 線路の配置を行う場合
                    <br>
                    区画 $(i, j)$ に種類 $p$ の線路を建設するとき、$p, i, j$ をスペース区切りで出力せよ。
                    <br>
                    線路の種類は、問題文中の番号付けに従う。
- 駅の配置を行う場合
                    <br>
                    区画 $(i, j)$ に駅を建設するとき、$0, i, j$ をスペース区切りで出力せよ。
                    <br>
- 待機を行う場合
                    <br>
                    `-1` を出力せよ。

        

        [例を見る](https://img.atcoder.jp/ahc043/de43f43a9c.html?lang=ja&amp;output=sample)
        

            
        
    
    
    
        
            

## 入力生成方法

            
                入力生成方法の詳細
                    

                        $L$ 以上 $U$ 以下の整数を一様ランダムに生成する関数を $\mathrm{rand}(L, U)$ とし、$L$ 以上 $U$ 未満の実数を一様ランダムに生成する関数を $\mathrm{rand\_double}(L, U)$ とする。
                        平均 $\mu$ 、標準偏差 $\sigma$ の正規分布からランダムに実数値を生成する関数を $\mathrm{normal}(\mu,\sigma)$ とする。
                    

                    

### $M$ の生成

                    

$M = \mathrm{round}(50 \times 2 ^{\mathrm{rand\_double}(0,5)})$ で生成する。

                    

### 家と職場の座標の生成

                    

                        次のようにして家の座標を生成するための混合ガウス分布を作成する：<br>
                        クラスタ数 $(\text{num\_cluster})$ を $\mathrm{rand}(5,15)$ で生成する。
                        各クラスタ $i$ に対して、重み $w_i = \mathrm{rand\_double}(0, 1)$ 、 中心座標 $(r_i, c_i) = (\mathrm{rand\_double}(0, N-1), \mathrm{rand\_double}(0, N-1))$ 、 標準偏差 $\sigma_i = \mathrm{rand\_double}(2, 15)$ を生成する。
                        <br>
                        職場の座標を生成するための混合ガウス分布も同様にして作成する。
                    

                    

                        以下の処理を $M$ 回繰り返し、$M$ 人の家と職場の座標を生成する。
                    

                    

                        

1. 家の座標を生成するための混合ガウス分布から、重み $w_i$ に比例する確率で、クラスタ $i$ をランダムに選択する。
2. 選択された $i$ に対し、家の座標 $r_0 = \text{round}(\text{normal}(r_i, \sigma_i)), c_0 = \text{round}(\text{normal}(c_i, \sigma_i))$ を生成する。
3. 生成された座標 $(r_0, c_0)$ が $0 \leq r_0 \lt N$ または $0 \leq c_0 \lt N$ を満たさない場合は、ステップ1からやり直す。
4. 職場の座標 $(r_1, c_1)$ についても同様に生成する。
5. 家の座標 $(r_0, c_0)$ と職場の座標 $(r_1, c_1)$ のマンハッタン距離が $4$  以下である場合は、ステップ1からやり直す。

                    

                    

### $K$ の生成

                    

                        $M$ 人について、家と職場の座標のマンハッタン距離の最小値を $d$ とする。$K = \mathrm{rand}(\mathrm{max}(10, d) \times 100, 2 \times N \times 100) + 10000$ で生成する。
                    

            
        
    
    
        
            

## ツール(入力ジェネレータ・ビジュアライザ)

            

- [Web版](https://img.atcoder.jp/ahc043/de43f43a9c.html): ローカル版より高機能でアニメーション表示が可能です。
- [ローカル版](https://img.atcoder.jp/ahc043/de43f43a9c.zip): 使用するには[Rust言語](https://www.rust-lang.org/ja)のコンパイル環境をご用意下さい。
                    -   - [Windows用のコンパイル済みバイナリ](https://img.atcoder.jp/ahc043/de43f43a9c_windows.zip): Rust言語の環境構築が面倒な方は代わりにこちらをご利用下さい。

            

                <font color="red">**コンテスト期間中に、ビジュアライズ結果の共有や、解法・考察に関する言及は禁止されています。ご注意下さい。**</font>
            

            

                解答プログラムは、`#` から始まるコメント行を出力に含めてもかまいません。
                Web版ビジュアライザを使用すると、コメント行を対応するタイミングで表示できるため、デバッグや考察等に役立てることができます。
                ジャッジプログラムはコメント行を全て無視するため、コメント行を出力するプログラムをそのまま提出可能です。
            

        
    
    
        
            

## サンプルプログラム

            
                Pythonによるサンプル実装
```plain
import sys

Pos = tuple[int, int]
EMPTY = -1
DO_NOTHING = -1
STATION = 0
RAIL_HORIZONTAL = 1
RAIL_VERTICAL = 2
RAIL_LEFT_DOWN = 3
RAIL_LEFT_UP = 4
RAIL_RIGHT_UP = 5
RAIL_RIGHT_DOWN = 6
COST_STATION = 5000
COST_RAIL = 100

class UnionFind:
    def __init__(self, n: int):
        self.n = n
        self.parents = [-1 for _ in range(n * n)]

    def _find_root(self, idx: int) -> int:
        if self.parents[idx] < 0:
            return idx
        self.parents[idx] = self._find_root(self.parents[idx])
        return self.parents[idx]

    def is_same(self, p: Pos, q: Pos) -> bool:
        p_idx = p[0] * self.n + p[1]
        q_idx = q[0] * self.n + q[1]
        return self._find_root(p_idx) == self._find_root(q_idx)

    def unite(self, p: Pos, q: Pos) -> None:
        p_idx = p[0] * self.n + p[1]
        q_idx = q[0] * self.n + q[1]
        p_root = self._find_root(p_idx)
        q_root = self._find_root(q_idx)
        if p_root != q_root:
            p_size = -self.parents[p_root]
            q_size = -self.parents[q_root]
            if p_size > q_size:
                p_root, q_root = q_root, p_root
            self.parents[q_root] += self.parents[p_root]
            self.parents[p_root] = q_root

def distance(a: Pos, b: Pos) -> int:
    return abs(a[0] - b[0]) + abs(a[1] - b[1])

class Action:
    def __init__(self, type: int, pos: Pos):
        self.type = type
        self.pos = pos

    def __str__(self):
        if self.type == DO_NOTHING:
            return "-1"
        else:
            return f"{self.type} {self.pos[0]} {self.pos[1]}"

class Result:
    def __init__(self, actions: list[Action], score: int):
        self.actions = actions
        self.score = score

    def __str__(self):
        return "\n".join(map(str, self.actions))

class Field:
    def __init__(self, N: int):
        self.N = N
        self.rail = [[EMPTY] * N for _ in range(N)]
        self.uf = UnionFind(N)

    def build(self, type: int, r: int, c: int) -> None:
        assert self.rail[r][c] != STATION
        if 1 <= type <= 6:
            assert self.rail[r][c] == EMPTY
        self.rail[r][c] = type

        # 隣接する区画と接続
        # 上
        if type in (STATION, RAIL_VERTICAL, RAIL_LEFT_UP, RAIL_RIGHT_UP):
            if r > 0 and self.rail[r - 1][c] in (STATION, RAIL_VERTICAL, RAIL_LEFT_DOWN, RAIL_RIGHT_DOWN):
                self.uf.unite((r, c), (r - 1, c))
        # 下
        if type in (STATION, RAIL_VERTICAL, RAIL_LEFT_DOWN, RAIL_RIGHT_DOWN):
            if r < self.N - 1 and self.rail[r + 1][c] in (STATION, RAIL_VERTICAL, RAIL_LEFT_UP, RAIL_RIGHT_UP):
                self.uf.unite((r, c), (r + 1, c))
        # 左
        if type in (STATION, RAIL_HORIZONTAL, RAIL_LEFT_DOWN, RAIL_LEFT_UP):
            if c > 0 and self.rail[r][c - 1] in (STATION, RAIL_HORIZONTAL, RAIL_RIGHT_DOWN, RAIL_RIGHT_UP):
                self.uf.unite((r, c), (r, c - 1))
        # 右
        if type in (STATION, RAIL_HORIZONTAL, RAIL_RIGHT_DOWN, RAIL_RIGHT_UP):
            if c < self.N - 1 and self.rail[r][c + 1] in (STATION, RAIL_HORIZONTAL, RAIL_LEFT_DOWN, RAIL_LEFT_UP):
                self.uf.unite((r, c), (r, c + 1))

    def is_connected(self, s: Pos, t: Pos) -> bool:
        assert distance(s, t) > 4  # 前提条件
        stations0 = self.collect_stations(s)
        stations1 = self.collect_stations(t)
        for station0 in stations0:
            for station1 in stations1:
                if self.uf.is_same(station0, station1):
                    return True
        return False

    def collect_stations(self, pos: Pos) -> list[Pos]:
        stations = []
        for dr in range(-2, 3):
            for dc in range(-2, 3):
                if abs(dr) + abs(dc) > 2:
                    continue
                r = pos[0] + dr
                c = pos[1] + dc
                if 0 <= r < self.N and 0 <= c < self.N and self.rail[r][c] == STATION:
                    stations.append((r, c))
        return stations

class Solver:
    def __init__(self, N: int, M: int, K: int, T: int, home: list[Pos], workplace: list[Pos]):
        self.N = N
        self.M = M
        self.K = K
        self.T = T
        self.home = home
        self.workplace = workplace
        self.field = Field(N)
        self.money = K
        self.actions = []

    def calc_income(self) -> int:
        income = 0
        for i in range(self.M):
            if self.field.is_connected(self.home[i], self.workplace[i]):
                income += distance(self.home[i], self.workplace[i])
        return income

    def build_rail(self, type: int, r: int, c: int) -> None:
        self.field.build(type, r, c)
        self.money -= COST_RAIL
        self.actions.append(Action(type, (r, c)))

    def build_station(self, r: int, c: int) -> None:
        self.field.build(STATION, r, c)
        self.money -= COST_STATION
        self.actions.append(Action(STATION, (r, c)))

    def build_nothing(self) -> None:
        self.actions.append(Action(DO_NOTHING, (0, 0)))

    def solve(self) -> Result:
        # 接続する人を見つける
        rail_count = (self.K - COST_STATION * 2) // COST_RAIL
        person_idx = 0
        while person_idx < self.M:
            if distance(self.home[person_idx], self.workplace[person_idx]) - 1 <= rail_count:
                break
            person_idx += 1
        assert person_idx != self.M

        # 駅の配置
        self.build_station(*self.home[person_idx])
        self.build_station(*self.workplace[person_idx])

        # 線路を配置して駅を接続する
        r0, c0 = self.home[person_idx]
        r1, c1 = self.workplace[person_idx]
        # r0 -> r1
        if r0 < r1:
            for r in range(r0 + 1, r1):
                self.build_rail(RAIL_VERTICAL, r, c0)
            if c0 < c1:
                self.build_rail(RAIL_RIGHT_UP, r1, c0)
            elif c0 > c1:
                self.build_rail(RAIL_LEFT_UP, r1, c0)
        elif r0 > r1:
            for r in range(r0 - 1, r1, -1):
                self.build_rail(RAIL_VERTICAL, r, c0)
            if c0 < c1:
                self.build_rail(RAIL_RIGHT_DOWN, r1, c0)
            elif c0 > c1:
                self.build_rail(RAIL_LEFT_DOWN, r1, c0)
        # c0 -> c1
        if c0 < c1:
            for c in range(c0 + 1, c1):
                self.build_rail(RAIL_HORIZONTAL, r1, c)
        elif c0 > c1:
            for c in range(c0 - 1, c1, -1):
                self.build_rail(RAIL_HORIZONTAL, r1, c)

        income = self.calc_income()
        self.money += income

        # あとは待機
        while len(self.actions) < self.T:
            self.build_nothing()
            self.money += income

        return Result(self.actions, self.money)

def main():
    N, M, K, T = map(int, input().split())
    home = []
    workplace = []
    for _ in range(M):
        r0, c0, r1, c1 = map(int, input().split())
        home.append((r0, c0))
        workplace.append((r1, c1))

    solver = Solver(N, M, K, T, home, workplace)
    result = solver.solve()
    print(result)
    print(f"score={result.score}", file=sys.stderr)

if __name__ == "__main__":
    main()
```
            
            

以下の処理を実装しています。

            

1. 人 $0$, 人 $1$, $\ldots$ と順に見て、家と職場の位置に駅を配置して駅の間を最短距離で線路で接続することが初期資金で可能であるような最初の人を見つける
2. 見つけた人の家と職場の位置に駅を配置し、家から職場までを接続する線路を配置する
3. その後は $T$ ターン目まで待機を行う

            

資金のシミュレーションを行うコードを含んでいます。参考にしてください。