/*
 * @PackageName: 
 * @Description: 
 * @Author: Man
 * @Date: 2023-03-11 19:16:00
 * @LastModifiedBy: Man
 * @LastEditTime: 2023-03-13 19:47:57
 */
import java.util.*;

public class Main {
    static int n;
    static int[] colors;
    static List<Integer>[] tree;
    static int ans;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        n = sc.nextInt();
        colors = new int[n];
        tree = new ArrayList[n];
        for (int i = 0; i < n; i++) {
            colors[i] = sc.nextInt();
            tree[i] = new ArrayList<>();
        }
        for (int i = 0; i < n - 1; i++) {
            int u = sc.nextInt() - 1;
            int v = sc.nextInt() - 1;
            tree[u].add(v);
            tree[v].add(u);
        }
        ans = 0;
        dfs(0, -1);
        System.out.println(ans);
    }

    static int dfs(int node, int parent) {
        int count = colors[node];
        for (int child : tree[node]) {
            if (child != parent) {
                count += dfs(child, node);
            }
        }
        ans += Math.abs(count - (n - count));
        return count;
    }
}
